import clientPromise from '@/lib/mongodb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const dynamic = 'force-dynamic';

async function getSubmissions() {
  try {
    const client = await clientPromise;
    const db = client.db('bima_db'); // Can be parameterized later if needed
    const submissions = await db.collection('submissions').find({}).sort({ createdAt: -1 }).limit(100).toArray();
    
    return submissions.map(sub => ({
      _id: sub._id.toString(),
      type: sub.type || 'General',
      name: sub.name || sub.ownerName || sub.petName || 'Unknown',
      email: sub.email || 'No email',
      phone: sub.phone || sub.mobileNumber || 'No phone',
      status: sub.status || 'New',
      createdAt: sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : 'N/A',
      raw: JSON.parse(JSON.stringify(sub)) // Pass raw document for dynamic modal (clone to remove DB references if any)
    }));
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
    return [];
  }
}

export default async function SubmissionsPage() {
  const submissions = await getSubmissions();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Form Submissions</h1>
        <Badge variant="outline" className="px-3 py-1 bg-white dark:bg-gray-800">
          Total: {submissions.length}
        </Badge>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        {submissions.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No submissions found yet. Once users submit forms, they will appear here.
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-gray-50 dark:bg-gray-900/50">
              <TableRow>
                <TableHead className="w-[150px]">Date</TableHead>
                <TableHead>Insurance Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((sub) => (
                <TableRow key={sub._id}>
                  <TableCell className="font-medium">{sub.createdAt}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{sub.type}</Badge>
                  </TableCell>
                  <TableCell>{sub.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col text-sm">
                      <span>{sub.email}</span>
                      <span className="text-gray-500">{sub.phone}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={sub.status === 'New' ? 'default' : 'outline'} className={sub.status === 'New' ? 'bg-blue-500' : ''}>
                      {sub.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link 
                      href={`/admin/submissions/${sub._id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    >
                      View Details
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
