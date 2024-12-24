import React, { useState } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface DonorDetails {
	name: string;
	email: string;
	phone: string;
}

interface FlutterwaveConfig {
	public_key: string;
	tx_ref: string;
	amount: number;
	currency: string;
	payment_options: string;
	customer: {
		email: string;
		phone_number: string;
		name: string;
	};
	customizations: {
		title: string;
		description: string;
		logo: string;
	};
}

interface DonationFormProps {
	onSuccess: (response: unknown) => void;
	publicKey: string;
	organizationName: string;
	organizationLogo: string;
}

const DonationForm: React.FC<DonationFormProps> = ({
	onSuccess,
	publicKey,
	organizationName,
	organizationLogo,
}) => {
	const [amount, setAmount] = useState<number>(0);
	const [donorDetails, setDonorDetails] = useState<DonorDetails>({
		name: "",
		email: "",
		phone: "",
	});
	const [customAmount, setCustomAmount] = useState<string>("");
	const [donationComplete, setDonationComplete] = useState<boolean>(false);
	const [, setPaymentResponse] = useState<unknown>(null);

	const suggestedAmounts = [1000, 5000, 10000, 50000];

	const handleAmountSelect = (selectedAmount: number) => {
		setAmount(selectedAmount);
		setCustomAmount("");
	};

	const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/[^0-9]/g, "");
		setCustomAmount(value);
		setAmount(Number(value));
	};

	const config: FlutterwaveConfig = {
		public_key: publicKey,
		tx_ref: Date.now().toString(),
		amount: amount,
		currency: "UGX",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: donorDetails.email,
			phone_number: donorDetails.phone,
			name: donorDetails.name,
		},
		customizations: {
			title: `Donate to ${organizationName}`,
			description: "Support our cause",
			logo: organizationLogo,
		},
	};

	const handleFlutterwavePayment = {
		...config,
		text: "Donate Now",
		callback: (response: unknown) => {
			console.log("Payment response:", response);
			setDonationComplete(true);
			setPaymentResponse(response);
			onSuccess(response);
			closePaymentModal();
		},
		onClose: () => {
			console.log("Donation modal closed");
		},
	};

	const isFormValid = (): boolean => {
		return (
			amount > 0 &&
			donorDetails.name.trim() !== "" &&
			donorDetails.email.trim() !== "" &&
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorDetails.email)
		);
	};

	return (
		<div className="w-full min-h-screen px-4 py-8 md:px-6">
			<Card className="max-w-xl mx-auto">
				<CardContent className="p-4 md:p-6">
					{donationComplete ? (
						<div className="text-center space-y-4 md:space-y-6 animate-slide-up">
							<div className="mx-auto w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
								<Check className="h-6 w-6 text-primary" />
							</div>
							<CardTitle className="text-xl md:text-2xl text-primary">
								Thank You for Your Donation!
							</CardTitle>
							<div className="space-y-2">
								<p className="text-base md:text-lg">Dear {donorDetails.name},</p>
								<p className="text-lg md:text-xl font-semibold">
									Your generous donation of UGX {amount.toLocaleString()} has been
									received.
								</p>
								<p className="text-xs md:text-sm text-muted-foreground">
									A confirmation email has been sent to {donorDetails.email}
								</p>
							</div>
						</div>
					) : (
						<div className="space-y-6 md:space-y-8">
							<div className="text-center space-y-2">
								<CardTitle className="text-xl md:text-2xl">
									Make a Donation
								</CardTitle>
								<CardDescription className="text-sm md:text-base">
									Support our cause and make a difference today
								</CardDescription>
							</div>

							<div className="space-y-4 md:space-y-6">
								<div className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="name" className="text-sm md:text-base">
											Full Name
										</Label>
										<Input
											id="name"
											type="text"
											placeholder="John Doe"
											value={donorDetails.name}
											onChange={(e) =>
												setDonorDetails({
													...donorDetails,
													name: e.target.value,
												})
											}
											className="w-full"
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="email" className="text-sm md:text-base">
											Email Address
										</Label>
										<Input
											id="email"
											type="email"
											placeholder="john@example.com"
											value={donorDetails.email}
											onChange={(e) =>
												setDonorDetails({
													...donorDetails,
													email: e.target.value,
												})
											}
											className="w-full"
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="phone" className="text-sm md:text-base">
											Phone Number
										</Label>
										<Input
											id="phone"
											type="tel"
											placeholder="+256 XXX XXX XXX"
											value={donorDetails.phone}
											onChange={(e) =>
												setDonorDetails({
													...donorDetails,
													phone: e.target.value,
												})
											}
											className="w-full"
										/>
									</div>
								</div>

								<div className="space-y-4">
									<Label className="text-sm md:text-base">
										Select Amount (UGX)
									</Label>
									<div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
										{suggestedAmounts.map((amt) => (
											<Button
												key={amt}
												variant={amount === amt ? "default" : "outline"}
												onClick={() => handleAmountSelect(amt)}
												className="w-full text-sm md:text-base py-2"
											>
												{amt.toLocaleString()}
											</Button>
										))}
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="custom-amount"
											className="text-sm md:text-base"
										>
											Custom Amount
										</Label>
										<Input
											id="custom-amount"
											type="text"
											placeholder="Enter a custom amount"
											value={customAmount}
											onChange={handleCustomAmountChange}
											className="w-full"
										/>
									</div>
								</div>

								<div className="pt-4">
									{isFormValid() ? (
										<FlutterWaveButton
											{...handleFlutterwavePayment}
											className="w-full bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm md:text-base"
										/>
									) : (
										<p className="text-destructive text-xs md:text-sm text-center">
											Please fill in your details and select an amount to
											donate
										</p>
									)}
								</div>
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default DonationForm;
