"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { isBefore, startOfDay } from "date-fns";
import { useEffect, useState } from "react";

export default function page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <main className="flex max-md:flex-col w-full">
      <Image
        src="/images/hero.png"
        alt="hero"
        width={1600}
        height={1567}
        className="md:max-w-3/7 object-cover"
      />

      <div className="flex flex-col md:w-4/7 bg-pink-200 items-center">
        <h1 className="text-3xl font-bold text-gray-700 my-5 text-center">
          Reserve a Table
        </h1>

        <form className="w-7/10 mt-2 flex flex-col items-center">
          <div className="md:grid md:grid-cols-2 gap-5 text-center max-md:flex flex-col justify-center w-full items-center">
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              name="name"
              className="col-start-1 row-start-1 bg-white h-8 w-full p-2 rounded-sm"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
              className="col-start-1 row-start-2 bg-white h-8 w-full p-2 rounded-sm"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              id="phone"
              pattern="^\+?[0-9\s\-()]{7,}$"
              className="col-start-2 row-start-1 bg-white h-8 w-full p-2 rounded-sm"
              required
            />

            <Select required>
              <SelectTrigger className="col-start-2 row-start-2 bg-white h-8 w-full p-2">
                <SelectValue placeholder="Select for a number of people" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Number of people</SelectLabel>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <SelectItem key={`option-${index}`} value={`${index + 1}`}>
                      {index + 1 < 10 ? `0${index + 1}` : "10+"}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full my-4 flex max-md:flex-col items-start">
            <h2 className="mb-1">Select Restaurant:</h2>
            <div className="flex gap-5 ml-3">
              <div className="flex gap-2 justify-center items-center">
                <input
                  type="radio"
                  id="santosh"
                  value="santosh"
                  name="place"
                  className="w-4 h-4 mt-1 accent-red-500"
                  required
                />
                <label htmlFor="santosh">Santosh</label>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <input
                  type="radio"
                  id="shantikunjo"
                  value="shantikunjo"
                  name="place"
                  className="w-4 h-4 mt-1 accent-red-500"
                  required
                />
                <label htmlFor="shantikunjo">Shantikunjo</label>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <input
                  type="radio"
                  id="nirala"
                  value="nirala"
                  name="place"
                  className="w-4 h-4 mt-1 accent-red-500"
                  required
                />
                <label htmlFor="nirala">Nirala More</label>
              </div>
            </div>
          </div>

          <div className="bg-white w-full flex justify-center items-center rounded-md border max-xl:flex-col px-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              timeZone={timeZone}
              className="h-90 w-80 border-0 border-white"
              captionLayout="label"
              weekStartsOn={6}
              disabled={(date) => {
                const day = date.getDay();
                return (
                  day === 5 ||
                  isBefore(startOfDay(date), startOfDay(new Date()))
                );
              }}
            />

            <div className="w-80 pt-8 mb-4 flex flex-col justify-between">
              <label className="level_box mb-4 flex justify-between gap-4">
                <span className="border w-1/2">
                  <input
                    type="text"
                    name="time0"
                    id="time0"
                    value="12:00 PM - 1:00 PM"
                    className="w-37 text-xs p-2 text-center"
                    onChange={() => {}}
                  />
                </span>
                <span className="border w-1/2">
                  <input
                    className="w-37 text-xs p-2 text-center"
                    type="text"
                    name="time1"
                    id="time1"
                    value="6:00 PM - 7:00 PM"
                    onChange={() => {}}
                  />
                </span>
              </label>
              <label className="level_box mb-4 flex justify-between gap-4">
                <span className="border w-1/2">
                  <input
                    type="text"
                    name="time2"
                    id="time2"
                    value="1:00 PM - 2:00 PM"
                    className="w-37 text-xs p-2 text-center"
                    onChange={() => {}}
                  />
                </span>
                <span className="border w-1/2">
                  <input
                    type="text"
                    name="time3"
                    id="time3"
                    value="7:00 PM - 8:00 PM"
                    className="w-37 text-xs p-2 text-center"
                    onChange={() => {}}
                  />
                </span>
              </label>
              <label className="level_box mb-4 flex justify-between gap-4">
                <span className="border w-1/2">
                  <input
                    type="text"
                    name="time4"
                    id="time4"
                    value="2:00 PM - 3:00 PM"
                    className="w-37 text-xs p-2 text-center"
                    onChange={() => {}}
                  />
                </span>
                <span className="border w-1/2">
                  <input
                    type="text"
                    name="time5"
                    id="time5"
                    value="8:00 PM - 9:00 PM"
                    className="w-37 text-xs p-2 text-center"
                    onChange={() => {}}
                  />
                </span>
              </label>
              <label className="level_box mb-4 flex justify-between gap-4">
                <span className="border w-1/2">
                  <input
                    type="text"
                    name="time6"
                    id="time6"
                    value="5:00 PM - 6:00 PM"
                    className="w-37 text-xs p-2 text-center"
                    onChange={() => {}}
                  />
                </span>
                <span className="border w-1/2">
                  <input
                    type="text"
                    name="time7"
                    id="time7"
                    value="9:00 PM - 10:00 PM"
                    className="w-37 text-xs p-2 text-center"
                    onChange={() => {}}
                  />
                </span>
              </label>
            </div>
          </div>
          <Button
            type="submit"
            className="uppercase text-white bg-red-600 my-4 mb-8 w-50 hover:scale-90 transition-all duration-300 ease-in-out"
          >
            Submit request
          </Button>
        </form>
      </div>
    </main>
  );
}
