'use server';

import clientPromise from '@/lib/mongodb';

export async function submitWeddingInsurance(data: any) {
  try {
    const client = await clientPromise;
    const db = client.db('bima_db');

    // Insert the submission with a timestamp, specific type, and initial status
    const result = await db.collection('submissions').insertOne({
      ...data,
      type: 'Event/Wedding Insurance',
      status: 'New',
      createdAt: new Date().toISOString(),
    });

    if (result.acknowledged) {
      return { success: true, message: 'Application submitted successfully' };
    } else {
      throw new Error('Failed to acknowledge database insertion');
    }
  } catch (error) {
    console.error('Wedding Insurance submission error:', error);
    return { success: false, message: 'Failed to submit application. Please try again later.' };
  }
}
