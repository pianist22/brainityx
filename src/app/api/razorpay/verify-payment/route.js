import crypto from "crypto";
import { NextResponse } from "next/server";

/**
 * API Route: Verify Razorpay Payment Signature
 * This verifies that the payment response is authentic
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: "Missing payment details" },
        { status: 400 }
      );
    }

    // Create signature using HMAC SHA256
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // Compare signatures
    const isValid = generatedSignature === razorpay_signature;

    if (isValid) {
      // Payment is verified! 
      // Here you can:
      // 1. Update your database
      // 2. Send confirmation email
      // 3. Grant access to services
      // 4. Update order status

      console.log("✅ Payment verified successfully!");
      console.log("Payment ID:", razorpay_payment_id);
      console.log("Order ID:", razorpay_order_id);

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      });
    } else {
      // Signature doesn't match - possible tampering
      console.error("❌ Payment verification failed - Invalid signature");
      return NextResponse.json(
        { success: false, error: "Payment verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { success: false, error: "Verification failed" },
      { status: 500 }
    );
  }
}
