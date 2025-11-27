'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '../schema/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Required from '@/components/ui/required';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HomeMenu = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const userData = {
    patient: {
      username: 'patient1',
      password: 'P@ssw0rd!',
    },
    staff: {
      username: 'staff1',
      password: 'St@ff1234',
    },
  };

  const onSubmit = (data: LoginSchemaType) => {
    if (
      data.username === userData.patient.username &&
      data.password === userData.patient.password
    ) {
      console.log('Logged in as patient');
    } else if (
      data.username === userData.staff.username &&
      data.password === userData.staff.password
    ) {
      console.log('Logged in as staff');
    } else {
      console.log('Invalid credentials');
    }
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
          <CardContent className="grid grid-cols-1 gap-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    ชื่อผู้ใช้งาน
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    รหัสผู้ใช้งาน
                    <Required />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-center w-full">
            <Button className="w-full">เข้าสู่ระบบ</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default HomeMenu;
