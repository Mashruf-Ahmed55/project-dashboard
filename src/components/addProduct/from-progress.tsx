interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function FormProgress({
  currentStep,
  totalSteps,
}: FormProgressProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="text-sm font-medium">
            Step {step}
          </div>
        ))}
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
        <div>Basic Info</div>
        <div>Inventory</div>
        <div>Financial</div>
      </div>
    </div>
  );
}
