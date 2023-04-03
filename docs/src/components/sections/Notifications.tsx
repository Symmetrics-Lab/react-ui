//import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { Switch, Checkbox, Notification } from '@symlab/react-ui';
import { forwardRef, useState } from 'react';
//import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { useForm } from 'react-hook-form';
//import { prettydate } from '../../data';
import { Link } from 'react-router-dom';
//import { prettydate } from '../../data';
export default function Notifications() {
  const [show, setShow] = useState(false);
  const origin = [
    {
      id: 2,
      type: 'information',
      title: 'Info Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: true,
      time: '2023-03-22T17:40:58.000Z',
    },
    {
      id: 3,
      type: 'information',
      title: 'Delete Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: false,
      time: '2021-10-28T17:40:58.000Z',
    },
    {
      id: 4,
      type: 'information',
      title: 'Info Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: true,
      time: '2023-03-24T17:40:58.000Z',
    },
    {
      id: 5,
      type: 'information',
      title: 'Delete Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: false,
      time: '2021-10-28T17:40:58.000Z',
    },
    {
      id: 6,
      type: 'information',
      title: 'Info Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: true,
      time: '2021-10-28T17:40:58.000Z',
    },
    {
      id: 7,
      type: 'information',
      title: 'Delete Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: false,
      time: '2021-10-28T17:40:58.000Z',
    },
    {
      id: 8,
      type: 'information',
      title: 'Info Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: true,
      time: '2021-10-28T17:40:58.000Z',
    },
    {
      id: 9,
      type: 'information',
      title: 'Delete Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: false,
      time: '2021-10-28T17:40:58.000Z',
    },
    {
      id: 10,
      type: 'information',
      title: 'Info Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: true,
      time: '2021-10-28T17:40:58.000Z',
    },
    {
      id: 11,
      type: 'information',
      title: 'Delete Your Account?',
      description: 'By deleting your account you will lose your all data',
      read: false,
      time: '2021-10-28T17:40:58.000Z',
    },
  ];
  const [mock, setMock] = useState(origin);
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const handleShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShow(!show);

    //mostrar solo no leídos
    setMock(origin.filter((item) => (!show ? !item.read : item.id)));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<any>({
    // resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    //alert(JSON.stringify(data));
    console.log({ data });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReadAllNotification = () => {
    //e.preventdefault();
    //alert(JSON.stringify(data));
    console.log('read all notifications');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const link = forwardRef<HTMLAnchorElement, any>(function DropItem(props, ref) {
    const { to, children, className, ...rest } = props;
    return (
      <Link className={className} to={to} ref={ref} {...rest}>
        {children}
      </Link>
    );
  });

  return (
    <div className="px-4 divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex dark:text-sym-txt-primary-dark text-sym-txt-primary justify-between h-[100px]">
        <div className="flex flex-1 justify-between items-center">
          <div className="dark:text-sym-txt-primary-dark text-sym-txt-primary text-xl">
            Notificaciones
          </div>
          <div className="dark:text-sym-txt-primary-dark text-sym-txt-primary flex items-center">
            <span className="text-xs text-sym-secondary-gray dark:text-sym-secondary-gray-dark pr-2">
              Mostrar solo no leídos
            </span>
            <Switch
              id="switch-show-notifications"
              toggle={show}
              onClick={handleShow}
              size="xs"
              className={''}
            />
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto items-center h-screen w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`flex text-right mt-4`}>
            <button
              onClick={handleReadAllNotification}
              type="button"
              className={`text-xs text-sym-secondary-gray dark:text-sym-secondary-gray-dark cursor-pointer hover:border-sym-txt-primary dark:hover:border-sym-txt-primary-dark 
          hover:text-sym-txt-primary dark:hover:text-sym-txt-primary-dark
          hover:border-b-2`}
            >
              Marcar todas como leídas
            </button>
          </div>
          <div
            className={`block text-right mt-4 ${
              watch('notification')?.filter((item: boolean) => item).length > 0
                ? 'block '
                : 'hidden'
            }`}
          >
            <button
              type="submit"
              className={`text-xs text-sym-secondary-gray dark:text-sym-secondary-gray-dark cursor-pointer hover:border-sym-txt-primary dark:hover:border-sym-txt-primary-dark 
          hover:text-sym-txt-primary dark:hover:text-sym-txt-primary-dark
          hover:border-b-2`}
            >
              Mostrar como leídas
            </button>
          </div>

          <ul className="pb-5 -mx-4">
            {mock &&
              mock.length > 0 &&
              mock.map((column, index) => {
                return (
                  <li
                    key={column.id}
                    className={`py-2 ${
                      watch('notification' + '.' + column.id) ? 'bg-sym-primary bg-opacity-25' : ''
                    }`}
                  >
                    <div className="flex flex-1 justify-between items-center px-4 ">
                      {/*   <Link to={String(column.id)} role="menuitem">
                        <div className="flex flex-col p-4 bg-sym-layout dark:bg-sym-layout-dark hover:shodow-lg rounded-2xl border-2 border-gray-100  shadow-none	dark:border-sym-border-dark cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="rounded-full border flex items-center justify-center w-10 h-10 flex-shrink-0 mx-auto">
                                <InformationCircleIcon className="text-sym-blue-100 dark:text-sym-blue-10 w-8" />
                              </div>
                              <div className="flex flex-col ml-3">
                                <div className="font-medium leading-none dark:text-sym-txt-primary-dark text-sym-txt-primary text-sm">
                                  {column?.title}
                                </div>
                                <p className="text-sm text-sym-secondary-gray dark:text-sym-secondary-gray-dark leading-none mt-1">
                                  {column?.description}
                                </p>
                                <p className="text-xs text-sym-secondary-gray dark:text-sym-secondary-gray-dark leading-none mt-1 flex justify-end">
                                  {prettydate().format(column?.time)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link> */}

                      <Notification
                        as={link}
                        data={{
                          title: column?.title,
                          description: column?.description,
                          time: column?.time,
                        }}
                        to={column.read ? null : String(column.id)}
                      />
                      <div className="pl-4">
                        <div className="group hover:bg-sym-primary dark:hover:bg-sym-primary-dark hover:bg-opacity-25 rounded">
                          <Checkbox
                            key={`radio-button-group-${index}`}
                            //sizes='sm'
                            id={String(index)}
                            className={
                              'h-5 w-5 group-hover:bg-sym-primary dark:group-hover:bg-sym-primary-dark'
                            }
                            //name={'- ' + column.id}
                            value={String(column.id)}
                            showValue={false}
                            //onChange={()=>(setNotifications(notifications.concat(notifications)))}
                            //label={option.name}
                            {...register('notification' + '.' + column.id)}
                          ></Checkbox>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </form>
      </div>
    </div>
  );
}
