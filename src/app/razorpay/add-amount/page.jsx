// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner"; // ⬅ Import toast from sonner

// function loadRazorpayScript() {
//   return new Promise((resolve) => {
//     if (typeof window !== "undefined" && window.Razorpay) {
//       resolve(true);
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// }

// export default function AddAmountPage() {
//   const [amount, setAmount] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const numericAmount = parseFloat(amount);

//     if (isNaN(numericAmount) || numericAmount <= 0) {
//       toast.error("Invalid amount", {
//         description: "Please enter a valid amount greater than 0.",
//       });
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       const scriptLoaded = await loadRazorpayScript();
//       if (!scriptLoaded) {
//         toast.error("Razorpay not loaded", {
//           description: "Check your internet connection and try again.",
//         });
//         setIsProcessing(false);
//         return;
//       }

//       const orderRes = await fetch("/api/razorpay/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: numericAmount }),
//       });

//       const orderData = await orderRes.json();

//       if (!orderData.success) {
//         toast.error("Order failed", {
//           description: orderData.error || "Unable to create payment order.",
//         });
//         setIsProcessing(false);
//         return;
//       }

//       const options = {
//         key: orderData.keyId,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED",
//         description: "Secure payment via Razorpay",
//         image: "/Brainityx_Logo.png",
//         order_id: orderData.orderId,
//         handler: async function (response) {
//           try {
//             const verifyRes = await fetch("/api/razorpay/verify-payment", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//               }),
//             });

//             const verifyData = await verifyRes.json();

//             if (verifyData.success) {
//               toast.success("Payment Successful! 🎉", {
//                 description: `Payment ID: ${verifyData.paymentId}`,
//                 duration: 5000,
//               });
//               // Optionally redirect after success:
//               setTimeout(() => router.push("/thank-you"), 2000);
//               router.push("/")
//             } else {
//               toast.error("Verification failed", {
//                 description: "Payment could not be verified. Please contact support.",
//               });
//             }
//           } catch (err) {
//             console.error(err);
//             toast.error("Verification error", {
//               description: "Error verifying payment. Please contact support.",
//             });
//           } finally {
//             setIsProcessing(false);
//           }
//         },
//         prefill: {},
//         notes: {
//           company: "BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED",
//         },
//         theme: {
//           color: "#3b82f6",
//         },
//         modal: {
//           ondismiss: function () {
//             toast.info("Payment cancelled", {
//               description: "You closed the payment window.",
//             });
//             setIsProcessing(false);
//           },
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       toast.error("Payment error", {
//         description: "Something went wrong. Please try again.",
//       });
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-linear-to-b from-background to-muted px-4 py-10">
//       <div className="w-full max-w-md rounded-2xl border border-border bg-card shadow-lg p-6 sm:p-8">
//         <div className="flex items-center space-x-3 mb-6">
//           <Image
//             src="/Brainityx_Logo.png"
//             alt="Brainityx Logo"
//             width={48}
//             height={48}
//             className="rounded-md"
//           />
//           <div>
//             <p className="text-xs uppercase tracking-wide text-muted-foreground">
//               Payment to
//             </p>
//             <h1 className="text-base sm:text-lg font-semibold text-foreground">
//               BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED
//             </h1>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="space-y-2">
//             <label
//               htmlFor="amount"
//               className="block text-sm font-medium text-muted-foreground"
//             >
//               Enter Amount (₹)
//             </label>
//             <input
//               id="amount"
//               type="number"
//               min="1"
//               step="0.01"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm sm:text-base outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
//               placeholder="e.g. 1500"
//               required
//             />
//           </div>

//           <div className="flex items-center justify-between rounded-md border border-dashed border-border bg-muted/60 px-3 py-2">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="https://cdn.razorpay.com/logo.svg"
//                 alt="Razorpay"
//                 width={80}
//                 height={24}
//               />
//               <span className="text-xs text-muted-foreground">
//                 Secured by Razorpay
//               </span>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isProcessing}
//             className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {isProcessing ? "Processing..." : "Continue with Payment"}
//           </button>

//           <button
//             type="button"
//             onClick={() => router.back()}
//             className="mt-1 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60"
//           >
//             Cancel and go back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function AddAmountPage() {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast.error("Invalid amount", {
        description: "Please enter a valid amount greater than 0.",
        style: {
          background: "white",
          color: "black",
        },
      });
      return;
    }

    setIsProcessing(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error("Razorpay not loaded", {
          description: "Check your internet connection and try again.",
          style: {
            background: "white",
            color: "black",
          },
        });
        setIsProcessing(false);
        return;
      }

      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numericAmount }),
      });

      const orderData = await orderRes.json();

      if (!orderData.success) {
        toast.error("Order failed", {
          description: orderData.error || "Unable to create payment order.",
          style: {
            background: "white",
            color: "black",
          },
        });
        setIsProcessing(false);
        return;
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED",
        description: "Secure payment via Razorpay",
        image: "/Brainityx_Logo.png",
        order_id: orderData.orderId,
        handler: async function (response) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              toast.success("Payment Successful! 🎉", {
                description: `Payment ID: ${verifyData.paymentId}`,
                duration: 3000,
                style: {
                  background: "white",
                  color: "black",
                },
              });
              
              // Redirect to home page after 2 seconds
              setTimeout(() => {
                router.push("/");
              }, 2000);
            } else {
              toast.error("Verification failed", {
                description: "Payment could not be verified. Please contact support.",
                style: {
                  background: "white",
                  color: "black",
                },
              });
            }
          } catch (err) {
            console.error(err);
            toast.error("Verification error", {
              description: "Error verifying payment. Please contact support.",
              style: {
                background: "white",
                color: "black",
              },
            });
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {},
        notes: {
          company: "BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED",
        },
        theme: {
          color: "#3b82f6",
        },
        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled", {
              description: "You closed the payment window.",
              style: {
                background: "white",
                color: "black",
              },
            });
            setIsProcessing(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      toast.error("Payment error", {
        description: "Something went wrong. Please try again.",
        style: {
          background: "white",
          color: "black",
        },
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-linear-to-b from-background to-muted px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card shadow-lg p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Image
            src="/Brainityx_Logo.png"
            alt="Brainityx Logo"
            width={48}
            height={48}
            className="rounded-md"
          />
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Payment to
            </p>
            <h1 className="text-base sm:text-lg font-semibold text-foreground">
              BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-muted-foreground"
            >
              Enter Amount (₹)
            </label>
            <input
              id="amount"
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm sm:text-base outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              placeholder="e.g. 1500"
              required
            />
          </div>

          <div className="flex items-center justify-between rounded-md border border-dashed border-border bg-muted/60 px-3 py-2">
            <div className="flex items-center space-x-2">
              <Image
                src="https://cdn.razorpay.com/logo.svg"
                alt="Razorpay"
                width={80}
                height={24}
              />
              <span className="text-xs text-muted-foreground">
                Secured by Razorpay
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isProcessing ? "Processing..." : "Continue with Payment"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="mt-1 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60"
          >
            Cancel and go back
          </button>
        </form>
      </div>
    </div>
  );
}

