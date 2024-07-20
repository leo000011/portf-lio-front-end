import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import Button from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

const DestinationAndDateStep = ({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
}: DestinationAndDateStepProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [eventStartandEndDates, setEventStartandEndDates] = useState<
    DateRange | undefined
  >();

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }
  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate = eventStartandEndDates ? "data" : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <button
        disabled={isGuestsInputOpen}
        onClick={openDatePicker}
        className="flex items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className=" text-lg text-zinc-400 w-48">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed px-2 inset-0 bg-black/60 flex items-center justify-center">
          <div className=" rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Selecione a data</h1>
                <button type="button" onClick={closeDatePicker}>
                  <X />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartandEndDates}
              onSelect={setEventStartandEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="primary">
          Altera local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5 " />
        </Button>
      )}
    </div>
  );
};

export default DestinationAndDateStep;
