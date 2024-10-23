import {
  CoreToolResult,
  StepResult as StepResultBase,
  tool as createTool,
} from "ai";
import { z } from "zod";

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Unknown = "unknown",
}

export const weatherTool = createTool({
  description: "Displays the weather forecast for the specified location.",
  parameters: z.object({
    location: z
      .string()
      .describe(
        "The location for which to get the forecast. Closest Airport code",
      ),
  }),
  execute: async ({ location }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    switch (location) {
      case "AMS":
        return {
          weather: Weather.Sunny,
          temperature: 25,
          humidity: 50,
          wind: 10,
        };
      case "BER":
        return {
          weather: Weather.Rainy,
          temperature: 15,
          humidity: 80,
          wind: 5,
        };
      case "LHR":
        return {
          weather: Weather.Cloudy,
          temperature: 20,
          humidity: 60,
          wind: 15,
        };
      default:
        return {
          weather: Weather.Unknown,
          temperature: 0,
          humidity: 0,
          wind: 0,
        };
    }
  },
});

export type WeatherParameters = (typeof weatherTool)["parameters"];
export type WeatherResult = Awaited<
  ReturnType<(typeof weatherTool)["execute"]>
>;
export type WeatherArgs = CoreToolResult<
  "displayMap",
  WeatherParameters,
  WeatherResult
>;

const mapTool = createTool({
  description:
    "Displays locations and routes for the planned trip on the map view.",
  parameters: z.object({
    name: z.string().describe("The name of the trip."),
    destination: z.string().describe("The main destination of the trip."),
    items: z
      .array(
        z.object({
          title: z
            .string()
            .describe("The title of the location, e.g., Hotel Pulitzer"),
          description: z
            .string()
            .optional()
            .describe("A description of the location or activity."),
          address: z
            .string()
            .optional()
            .describe("The address of the location."),
          lat: z.number().describe("The latitude of the location."),
          lon: z.number().describe("The longitude of the location."),
          type: z
            .enum([
              "attraction",
              "restaurant",
              "accommodation",
              "transport",
              "other",
            ])
            .describe("The type of the location."),
          timeFrame: z
            .enum(["morning", "afternoon", "evening", "night", "all-day"])
            .describe("The suggested time to visit the location."),
          duration: z
            .number()
            .optional()
            .describe("The duration of the activity in hours."),
          price: z
            .number()
            .optional()
            .describe("The estimated price of the activity in USD."),
          day: z
            .number()
            .optional()
            .describe(
              "The day on which the activity takes place, if it's a multi day trip.",
            ),
        }),
      )
      .describe("A list of locations and activities to display on the map."),
  }),
});

export const tools = {
  displayMap: mapTool,
  displayWeather: weatherTool,
};

export type Tools = typeof tools;

export type StepResult = StepResultBase<Tools>;
