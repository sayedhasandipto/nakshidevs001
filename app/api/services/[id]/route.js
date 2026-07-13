import { connectDB } from '@/lib/db';
import Service from '@/lib/models/Service';
import { Types } from 'mongoose';

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = params;

    if (!Types.ObjectId.isValid(id)) {
      return Response.json({ error: 'Invalid service ID' }, { status: 400 });
    }

    const service = await Service.findById(id).populate(
      'providerId',
      'name avatar phone bio rating'
    );

    if (!service) {
      return Response.json({ error: 'Service not found' }, { status: 404 });
    }

    return Response.json({ service }, { status: 200 });
  } catch (error) {
    console.error('Error fetching service:', error);
    return Response.json({ error: 'Failed to fetch service' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const body = await request.json();

    if (!Types.ObjectId.isValid(id)) {
      return Response.json({ error: 'Invalid service ID' }, { status: 400 });
    }

    const service = await Service.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return Response.json({ error: 'Service not found' }, { status: 404 });
    }

    return Response.json(
      { service, message: 'Service updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating service:', error);
    return Response.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = params;

    if (!Types.ObjectId.isValid(id)) {
      return Response.json({ error: 'Invalid service ID' }, { status: 400 });
    }

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return Response.json({ error: 'Service not found' }, { status: 404 });
    }

    return Response.json({ message: 'Service deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting service:', error);
    return Response.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
