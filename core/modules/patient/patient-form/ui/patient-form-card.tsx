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

const PatientFormCard = () => {
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

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col justify-center items-center space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card className="w-full max-w-sm md:max-w-lg">
          <CardHeader className="flex justify-center items-center">
            <h1 className="font-bold text-xl">เข้าสู่ระบบ</h1>
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
                    <Input {...field} type="text" />
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
                    <Input {...field} type="text" />
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
          </CardContent>
          <CardFooter className="flex justify-center w-full">
            <Button className="w-full bg-green-700 font-bold ">บันทึก</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default PatientFormCard;
