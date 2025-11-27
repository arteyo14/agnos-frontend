'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Required from '@/components/ui/required';
import { socket } from '@/lib/socket';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TypingData = {
  [field: string]: string;
};

const StaffView = () => {
  const [typingStatus, setTypingStatus] = useState<boolean>(false);
  const [data, setData] = useState<TypingData>({});

  const patientId = 'cb05a27b-9155-42d8-acc9-47891b71f74a';
  const router = useRouter();
  const logout = () => {
    router.push('/');
  };

  useEffect(() => {
    socket.emit('joinRoom', { patient_id: patientId });
    console.log('Staff joined room for patient:', patientId);

    socket.on('typing', ({ field, value, is_typing }) => {
      setTypingStatus(is_typing);
      setData((prev) => ({
        ...prev,
        [field]: value,
      }));
    });

    socket.on('typing:update', ({ is_typing }) => {
      setTypingStatus(is_typing);
    });

    return () => {
      socket.off('typing');
      socket.off('typing:update');
    };
  }, []);
  return (
    <div className="flex justify-center items-center w-full">
      <Card className="w-full max-w-sm md:max-w-xl">
        <CardHeader className="flex justify-between w-full ">
          <h1 className="font-bold text-xl">ข้อมูลผู้ป่วย</h1>
          <span>สถานะ {typingStatus ? 'กำลังพิมพ์...' : 'นิ่ง'}</span>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="font-semibold">
              ชื่อจริง <Required />
            </Label>
            <p>{data['firstname'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">ชื่อกลาง</Label>
            <p>{data['middlename'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              นามสกุล <Required />
            </Label>
            <p>{data['lastname'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              วันเกิด <Required />
            </Label>
            <p>{data['birthdate'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              เพศ <Required />
            </Label>
            <p>
              {data['gender']
                ? data['gender'] === 'male'
                  ? 'ชาย'
                  : 'หญิง'
                : '-'}
            </p>
          </div>
          <div>
            <Label className="font-semibold">
              เบอร์โทรศัพท์ <Required />
            </Label>
            <p>{data['phone_no'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              อีเมล <Required />
            </Label>
            <p>{data['email'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              ภาษาที่ต้องการ <Required />
            </Label>
            <p>{data['preferred_languange'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              สัญชาติ
              <Required />
            </Label>
            <p>{data['nationality'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">ติดต่อฉุกเฉิน</Label>
            <p>{data['emergency_contact'] || '-'}</p>
          </div>
          <div>
            <Label className="font-semibold">ศาสนา</Label>
            <p>{data['religion'] || '-'}</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Label className="font-semibold">
              ที่อยู่ <Required />
            </Label>
            <p>{data['address'] || '-'}</p>
          </div>
        </CardContent>
        <CardFooter className="mt-1">
          <Button
            className="w-full cursor-pointer bg-red-600 font-bold  hover:bg-red-700"
            onClick={logout}
          >
            ออกจากระบบ
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StaffView;
