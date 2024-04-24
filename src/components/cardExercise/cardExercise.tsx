"use client";
import { ICardExcercise } from "./consts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./cardExercise.css";

export const CardExercise = ({ type, excercises }: ICardExcercise) => {
  return (
    <Card className="card-exercise--wrapper">
      {type && (
        <CardHeader className="p-0 ">
          <CardTitle className="text-lg text-orange-600 ">{type}</CardTitle>
        </CardHeader>
      )}
      {excercises && (
        <CardContent className="card-exercise--content p-0">
          {excercises.map((exercise, index) => (
            <CardDescription className="card-exercise--titles
             "
            key={index}>{exercise}
            </CardDescription>
          ))}
        </CardContent>
      )}
    </Card>
  );
};
