import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, FileText, Calendar, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getSubmission(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db('bima_db');
    const submission = await db.collection('submissions').findOne({ _id: new ObjectId(id) });
    return submission;
  } catch (error) {
    console.error("Failed to fetch submission:", error);
    return null;
  }
}

// Format camelCase to Title Case (e.g., ownerName -> Owner Name)
const formatLabel = (key: string) => {
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export default async function SubmissionDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const submission = await getSubmission(resolvedParams.id);

  if (!submission) {
    notFound();
  }

  // Filter out system keys that shouldn't be displayed in the dynamic list
  const ignoredKeys = ['_id', 'status', 'type', 'createdAt'];

  // Create an array of key-value pairs for rendering, filtering out ignored keys
  const detailsList = Object.entries(submission).filter(([key]) => !ignoredKeys.includes(key));

  return (
    <div className="space-y-6">
      {/* Header & Back Button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link 
            href="/admin/submissions" 
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Submissions
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#673CDD]" />
            {submission.type} Submission
          </h1>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <span className="text-sm text-gray-500">Status:</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {submission.status || 'New'}
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Dynamic Details Card (takes up 2/3 space on large screens) */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Form Details</h3>
          </div>
          
          <div className="p-0">
            <dl className="divide-y divide-gray-100 dark:divide-gray-800">
              {detailsList.map(([key, value]) => {
                // Handle arrays (like addons)
                const displayValue = Array.isArray(value) 
                  ? value.length > 0 ? value.join(', ') : 'None'
                  : typeof value === 'boolean' 
                    ? (value ? 'Yes' : 'No') 
                    : String(value || 'N/A');

                return (
                  <div key={key} className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {formatLabel(key)}
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 font-medium">
                      {displayValue}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>

        {/* Sidebar Meta Card */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Metadata</h3>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Submitted On</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {submission.createdAt ? new Date(submission.createdAt).toLocaleString() : 'N/A'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">System ID</p>
                  <p className="font-mono text-xs text-gray-900 dark:text-gray-100 mt-1 truncate max-w-[200px]">
                    {submission._id.toString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
