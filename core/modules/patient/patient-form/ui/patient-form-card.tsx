'use client';

import { useForm } from 'react-hook-form';
import { patientFormSchema, PatientFormSchema } from '../schema/patient-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Required from '@/components/ui/required';
import { Textarea } from '@/components/ui/text-area';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CalendarPicker } from '@/components/ui/custom/input/date-picker';

const PatientFormCard = () => {
  const router = useRouter();

  const form = useForm<PatientFormSchema>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      firstname: '',
      middlename: '',
      lastname: '',
      birthdate: '',
      gender: '',
      phone_no: '',
      email: '',
      address: '',
      preferred_languange: '',
      nationality: '',
      emergency_contact: undefined,
      religion: undefined,
    },
  });

  const onSubmit = (data: PatientFormSchema) => {
    console.log('Patient Form Data:', data);
  };

  const onCancel = () => router.push('/');

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col justify-center items-center space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card className="w-full max-w-sm md:max-w-lg">
          <CardHeader className="w-full">
            <h1 className="font-bold text-xl">ข้อมูลผู้ป่วย</h1>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    ชื่อจริง
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middlename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ชื่อกลาง</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    นามสกกุล
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    วันเกิด
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <CalendarPicker
                      value={field.value ? new Date(field.value) : undefined}
                      onChange={(date) =>
                        field.onChange(date ? date.toISOString() : '')
                      }
                      hasError={!!form.formState.errors.birthdate}
                      placeholder="เลือกวันเกิด"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    เพศ
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex space-x-2"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <FormLabel htmlFor="male" className="font-normal">
                          ชาย
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <FormLabel htmlFor="female" className="font-normal">
                          หญิง
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_no"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    เบอร์โทรศัพท์
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    อีเมล
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferred_languange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    ภาษาที่ต้องการ
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    สัญชาติ
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergency_contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ติดต่อฉุกเฉิน</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ศาสนา</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className=" md:col-span-2">
                  <FormLabel>
                    ที่อยู่
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button
              className="w-full cursor-pointer bg-red-600  hover:bg-red-700 font-bold "
              type="button"
              onClick={onCancel}
            >
              ยกเลิก
            </Button>
            <Button className="w-full cursor-pointer bg-green-600  hover:bg-green-700 font-bold ">
              บันทึก
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default PatientFormCard;
