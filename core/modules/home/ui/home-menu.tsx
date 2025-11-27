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
import { loginSchema, LoginSchemaType } from '../schema/home-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Required from '@/components/ui/required';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const HomeMenu = () => {
  const router = useRouter();
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
      alert('Logged in as patient');
      router.push('/patient');
    } else if (
      data.username === userData.staff.username &&
      data.password === userData.staff.password
    ) {
      alert('Logged in as staff');
      router.push('/staff');
    } else {
      alert('Invalid credentials');
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
            <Button className="w-full bg-green-600 hover:bg-green-700 cursor-pointer">
              เข้าสู่ระบบ
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default HomeMenu;
