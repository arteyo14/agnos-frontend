'use client';

import * as React from 'react';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface CalendarPickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
}

export const CalendarPicker: React.FC<CalendarPickerProps> = ({
  value,
  onChange,
  placeholder = 'เลือกวันที่',
  className = 'w-48',
  hasError = false,
  onBlur = () => {},
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    value
  );

  React.useEffect(() => {
    if (value) setSelectedDate(value);
  }, [value]);

  const handleSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    onChange?.(date);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className={cn(
            'justify-between font-normal',
            className,
            hasError && 'border-red-500 focus-visible:ring-red-500'
          )}
        >
          {selectedDate
            ? format(selectedDate, 'dd MMMM yyyy', { locale: th })
            : placeholder}
          <CalendarDays className="ml-2 h-4 w-4 opacity-70" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          captionLayout="dropdown"
          onSelect={handleSelect}
          onDayBlur={onBlur}
          disabled={(date) => date > new Date()}
        />
      </PopoverContent>
    </Popover>
  );
};
