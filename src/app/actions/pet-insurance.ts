'use server';

import clientPromise from '@/lib/mongodb';

export async function submitPetInsurance(data: any) {
  try {
    const client = await clientPromise;
    const db = client.db('bima_db');

    const result = await db.collection('submissions').insertOne({
      ...data,
      type: 'Pet Insurance',
      status: 'New',
      createdAt: new Date().toISOString(),
    });

    if (result.acknowledged) {
      return { success: true, message: 'Application submitted successfully!' };
    } else {
      return { success: false, message: 'Failed to submit application.' };
    }
  } catch (error) {
    console.error('Error submitting pet insurance form:', error);
    return { success: false, message: 'Internal Server Error.' };
  }
}
