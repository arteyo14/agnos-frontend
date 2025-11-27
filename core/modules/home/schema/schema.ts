import z from 'zod';

const schema = z.object({
  username: z.string().trim().nonempty('โปรดระบุชื่อผู้ใช้'),
  password: z.string().trim().nonempty('โปรดระบุรหัสผ่าน'),
});

type Schema = z.infer<typeof schema>;

export { schema as loginSchema, type Schema as LoginSchemaType };
