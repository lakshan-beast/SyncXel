
import { featuresData } from "../../../data/featuresData";
import FeatureCard from "./FeaturesCard";

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-12">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          index={index}
        />
      ))}
    </div>
  );
}
