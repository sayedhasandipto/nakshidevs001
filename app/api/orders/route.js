import { connectDB } from '@/lib/db';
import Order from '@/lib/models/Order';
import Service from '@/lib/models/Service';

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const role = searchParams.get('role');
    const status = searchParams.get('status');

    if (!userId) {
      return Response.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    let query = {};

    if (role === 'client') {
      query.clientId = userId;
    } else if (role === 'provider') {
      query.providerId = userId;
    }

    if (status) {
      query.status = status;
    }

    const orders = await Order.find(query)
      .populate('serviceId', 'title price')
      .populate('clientId', 'name email phone')
      .populate('providerId', 'name email phone')
      .sort({ createdAt: -1 });

    return Response.json({ orders }, { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return Response.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { serviceId, clientId, providerId, description, deliverables } = body;

    if (!serviceId || !clientId || !providerId) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get service to fetch price
    const service = await Service.findById(serviceId);
    if (!service) {
      return Response.json({ error: 'Service not found' }, { status: 404 });
    }

    const order = new Order({
      serviceId,
      clientId,
      providerId,
      amount: service.price,
      description: description || service.description,
      deliverables: deliverables || service.features,
      status: 'pending',
      paymentStatus: 'unpaid',
    });

    await order.save();

    return Response.json(
      { order, message: 'Order created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return Response.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
