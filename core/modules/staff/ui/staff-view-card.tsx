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

const StaffView = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Card className="w-full max-w-sm md:max-w-xl">
        <CardHeader className="flex justify-between w-full ">
          <h1 className="font-bold text-xl">ข้อมูลผู้ป่วย</h1>
          <span>สถานะ {'กำลังพิมพ์...'}</span>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="font-semibold">
              ชื่อจริง <Required />
            </Label>
            <p>{'{ชื่อจริง}'}</p>
          </div>
          <div>
            <Label className="font-semibold">ชื่อกลาง</Label>
            <p>{'{ชื่อกลาง}'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              นามสกุล <Required />
            </Label>
            <p>{'{นามสกุล}'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              วันเกิด <Required />
            </Label>
            <p>{'{วันเกิด}'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              เพศ <Required />
            </Label>
            <p>{'{เพศ}'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              เบอร์โทรศัพท์ <Required />
            </Label>
            <p>{'{เบอร์โทรศัพท์}'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              อีเมล <Required />
            </Label>
            <p>{'{อีเมล}'}</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Label className="font-semibold">
              ที่อยู่ <Required />
            </Label>
            <p>{'{ที่อยู่}'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              ภาษาที่ต้องการ <Required />
            </Label>
            <p>{'{ภาษาที่ต้องการ}'}</p>
          </div>
          <div>
            <Label className="font-semibold">
              สัญชาติ
              <Required />
            </Label>
            <p>{'{สัญชาติ}'}</p>
          </div>
          <div>
            <Label className="font-semibold">ติดต่อฉุกเฉิน</Label>
            <p>{'{ติดต่อฉุกเฉิน}'}</p>
          </div>
          <div>
            <Label className="font-semibold">ศาสนา</Label>
            <p>{'{ศาสนา}'}</p>
          </div>
        </CardContent>
        <CardFooter className="mt-1">
          <Button className="w-full bg-destructive font-bold text-lg">
            ออกจากระบบ
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StaffView;
