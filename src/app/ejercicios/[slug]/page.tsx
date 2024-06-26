"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { ejerciciosList } from "@/data/ejerciciosList";
import { IExerciseArray, IExerciseObject } from "./const";
import { CardExerciseLayout } from "@/components/cardExcerciseLayout/cardExerciseLayout";
export default function EjerciciosTemplate({
  params,
}: {
  params: { slug: string };
}) {
  const [page, setPage] = useState<IExerciseObject>();

  useEffect(() => {
    getPageData(ejerciciosList);
  }, [params.slug]);

  const filterExerciseObj = (exerciseObj: IExerciseArray) =>
    exerciseObj.find(
      (excersice: IExerciseObject) => excersice.key === params.slug
    );

  const getPageData = (dataArray: IExerciseArray) => {
    const data = filterExerciseObj(dataArray);
    setPage(data);
  };

  return (
    <>
      <Navbar
        title="MathApp"
        LogoUrl="https://i.postimg.cc/WbR8y1DK/logo.png"
      />
      <main className="flex min-h-screen flex-col items-center sm:p-24 p-4">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            {`Ejercicios con ${page?.name}`}
          </h1>
          <CardExerciseLayout dataArray={page?.list} />

          <h1 className="scroll-m-20 text-4x1 font-extrabold tracking-tight lg:text-5xl text-center">
            Ejemplo de uso
          </h1>
        </div>
      </main>
    </>
  );
}
