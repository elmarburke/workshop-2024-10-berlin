import { Button } from "./ui/button";

interface TripSuggestionsProps {
  onSuggestionClick: (prompt: string) => void;
}

export function TripSuggestions({ onSuggestionClick }: TripSuggestionsProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-4 pt-8">
        <Button
          type="button"
          onClick={() =>
            onSuggestionClick(
              "We're visiting Paris in the spring for our honeymoon and would love a romantic 3-day itinerary. Include iconic landmarks like the Eiffel Tower and Louvre, charming neighbourhoods like Montmartre, and some quiet spots for relaxation in parks. We'd appreciate suggestions for romantic cafés, scenic walks, and any special spring events. A mix of sightseeing and intimate moments is ideal.",
            )
          }
        >
          Honeymoon in Paris
        </Button>
        <Button
          type="button"
          onClick={() =>
            onSuggestionClick(
              "It's my first time visiting Japan, and I'll be spending 5 days in Tokyo. I'd love to experience a mix of the city's modern attractions and traditional culture. Please include must-see spots like Shibuya Crossing, Senso-ji Temple, and Tokyo Tower, as well as unique neighbourhoods like Harajuku and Asakusa. I’m also interested in trying local cuisine, from sushi to ramen, and visiting parks or gardens for a peaceful break. Suggestions for cultural experiences like tea ceremonies or visiting historical sites would be great. I prefer easy walking routes and convenient public transport options.",
            )
          }
        >
          Tokyo Exploration
        </Button>
        <Button
          type="button"
          onClick={() =>
            onSuggestionClick(
              "I'm heading to Charleroi for a weekend by train, looking for a quiet escape filled with introspection and a sense of melancholy. I want to explore the city’s industrial remnants, abandoned places, and forgotten corners that evoke a mood of decay and loss. I’m seeking a raw, unpolished atmosphere—places where the weight of time is felt. Suggest desolate streets, decaying architecture, and hidden spots that capture the haunting beauty of urban decline. I’d also like to find sombre cafés or quiet benches by the river where I can sit alone, reflect, and absorb the heavy mood of the city.",
            )
          }
        >
          Weekend in Charleroi
        </Button>
        <Button
          type="button"
          onClick={() =>
            onSuggestionClick(
              "Plan a melancholic weekend 'treurtrip' to Almere and Lelystad by public transport.",
            )
          }
        >
          Almere and Lelystad
        </Button>
      </div>
    </div>
  );
}
