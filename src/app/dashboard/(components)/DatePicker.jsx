"use client";

import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState, useEffect } from "react";

export function formatDate(date) {
  if (!date) return "";

  // Ensure date is a Date object
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d.getTime())) return ""; // invalid date check

  return d.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
export function DatePickerInput({ label = "Week Date", value, onChange, disabled = false }) {
  const [open, setOpen] = useState(false);
  const [internalDate, setInternalDate] = useState(value || new Date());
  const [month, setMonth] = useState(internalDate);

  // Sync external value changes
  useEffect(() => {
    if (value) {
      setInternalDate(value);
      setMonth(value);
    }
  }, [value]);

  return (
    <Field className="mx-auto ">
      <FieldLabel className="uppercase">{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput
          value={formatDate(internalDate)}
          placeholder="Select date"
          readOnly
          disabled={disabled}
        />
        {!disabled && (
          <InputGroupAddon align="inline-end">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button className="p-1" aria-label={`Select date for ${label}`}>
                  <CalendarIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={internalDate}
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(selectedDate) => {
                    setInternalDate(selectedDate);
                    setMonth(selectedDate);
                    onChange && onChange(selectedDate); // pass selected date to parent
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </InputGroupAddon>
        )}
      </InputGroup>
    </Field>
  );
}
