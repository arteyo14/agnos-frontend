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
import { buddhistFormatDate } from '@/lib/formate-date';
import { socket } from '@/lib/socket';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TypingData = {
  [field: string]: {
    value: string;
    is_typing: boolean;
  };
};

const StaffView = () => {
  const [typingStatus, setTypingStatus] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
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
        [field]: {
          value: value,
          is_typing: is_typing,
        },
      }));
    });

    socket.on('typing:update', ({ is_typing }) => {
      setTypingStatus(is_typing);
      setData((prev) => ({
        ...prev,
        ...Object.fromEntries(
          Object.entries(prev).map(([field, info]) => [
            field,
            { ...info, is_typing: is_typing },
          ])
        ),
      }));
    });

    socket.on('form:submitted', () => {
      setIsSubmit(true);
      console.log('Form submitted by patient');
      alert('ผู้ป่วยได้ทำการส่งแบบฟอร์มเรียบร้อยแล้ว');
    });

    return () => {
      socket.off('typing');
      socket.off('typing:update');
      socket.off('form:submit');
    };
  }, []);
  return (
    <div className="flex justify-center items-center w-full">
      <Card className="w-full max-w-sm md:max-w-xl">
        <CardHeader className="flex justify-between w-full ">
          <h1 className="font-bold text-xl">ข้อมูลผู้ป่วย</h1>
          <span>
            สถานะ{' '}
            {typingStatus
              ? 'กำลังพิมพ์...'
              : isSubmit
              ? 'บันทึกข้อมูลเรียบร้อยแล้ว'
              : 'นิ่ง'}
          </span>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="font-semibold">
              ชื่อจริง <Required />
            </Label>
            {data['firstname']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['firstname']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">ชื่อกลาง</Label>
            {data['middlename']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['middlename']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">
              นามสกุล <Required />
            </Label>
            {data['lastname']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['lastname']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">
              วันเกิด <Required />
            </Label>
            {data['birthdate']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>
                {buddhistFormatDate(data['birthdate']?.value, 'dd mmmm yyyy') ||
                  '-'}
              </p>
            )}
          </div>
          <div>
            <Label className="font-semibold">
              เพศ <Required />
            </Label>
            {data['gender']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>
                {data['gender']
                  ? data['gender']?.value === 'male'
                    ? 'ชาย'
                    : 'หญิง'
                  : '-'}
              </p>
            )}
          </div>
          <div>
            <Label className="font-semibold">
              เบอร์โทรศัพท์ <Required />
            </Label>
            {data['phone_no']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['phone_no']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">
              อีเมล <Required />
            </Label>
            {data['email']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['email']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">
              ภาษาที่ต้องการ <Required />
            </Label>
            {data['preferred_languange']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['preferred_languange']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">
              สัญชาติ
              <Required />
            </Label>
            {data['nationality']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['nationality']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">ติดต่อฉุกเฉิน</Label>
            {data['emergency_contact']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['emergency_contact']?.value || '-'}</p>
            )}
          </div>
          <div>
            <Label className="font-semibold">ศาสนา</Label>
            {data['religion']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['religion']?.value || '-'}</p>
            )}
          </div>
          <div className="col-span-1 md:col-span-2">
            <Label className="font-semibold">
              ที่อยู่ <Required />
            </Label>
            {data['address']?.is_typing ? (
              <p className="flex gap-0.5 text-gray-600 items-center">
                <span className="animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className="animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className="animate-bounce">.</span>
              </p>
            ) : (
              <p>{data['address']?.value || '-'}</p>
            )}
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
