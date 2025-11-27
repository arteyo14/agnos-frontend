import z from 'zod';

const schema = z.object({
  firstname: z.string().trim().nonempty('โปรดระบุชื่อจริง'),
  middlename: z.string().trim().optional(),
  lastname: z.string().trim().nonempty('โปรดระบุนามสกุล'),
  birthdate: z.string().trim().nonempty('โปรดระบุวันเกิด'),
  gender: z.string().nonempty('โปรดระบุเพศ'),
  phone_no: z.string().trim().nonempty('โปรดระบุหมายเลขโทรศัพท์'),
  email: z
    .string()
    .trim()
    .email('โปรดระบุอีเมลที่ถูกต้อง')
    .nonempty('โปรดระบุอีเมล'),
  address: z.string().trim().nonempty('โปรดระบุที่อยู่'),
  preferred_languange: z.string().nonempty('โปรดระบุภาษาที่ต้องการ'),
  nationality: z.string().trim().nonempty('โปรดระบุสัญชาติ'),
  emergency_contact: z.string().trim().optional(),
  religion: z.string().trim().optional(),
});

type Schema = z.infer<typeof schema>;

export { schema as patientFormSchema, type Schema as PatientFormSchema };
