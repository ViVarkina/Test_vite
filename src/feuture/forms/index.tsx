import Input from 'antd/es/input/Input';
import { Controller, useForm } from 'react-hook-form';
import { Button, Form } from 'antd';

interface PropsForm {
  name: string;
  firstName: string;
}

export const Forms = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PropsForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        validateStatus={errors.name ? 'error' : ''}
        help={errors.name ? 'Поле обязательно' : ''}
      >
        <Controller
          name={'name'}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Form.Item>
              <Input placeholder={'name'} {...field} />
            </Form.Item>
          )}
        />
      </Form.Item>
      <Form.Item
        validateStatus={errors.firstName ? 'error' : ''}
        help={errors.firstName ? 'Поле обязательно' : ''}
      >
        <Controller
          name={'firstName'}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => <Input placeholder={'firstName'} {...field} />}
        />
      </Form.Item>
        <Button htmlType={'submit'}>Сохранить</Button>

    </Form>
  );
};
