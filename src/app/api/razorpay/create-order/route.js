import Razorpay from "razorpay";
import { NextResponse } from "next/server";

/**
 * API Route: Create Razorpay Order
 * This creates an order on Razorpay server before payment
 */
export async function POST(request) {
  try {
    // Get amount from request body
    const body = await request.json();
    const amount = Number(body.amount);

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: "Valid amount is required" },
        { status: 400 }
      );
    }

    // Initialize Razorpay with your keys
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create order options
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise (₹1 = 100 paise)
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
      notes: {
        description: "Payment for BRAINITYX services",
      },
    };

    // Create order using Razorpay SDK
    const order = await razorpay.orders.create(options);

    // Return order details to frontend
    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID, // Public key for checkout
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}
