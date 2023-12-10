import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';
import Header from './Header';
import CartOverview from './../features/cart/CartOverview';

export default function AppLayout() {
    const navigation = useNavigation();
    const isLoading= navigation.state === 'loading';

  return (
    <div className='min-h-[50vh]'>
        {isLoading && <Loader />}
        
        <Header />

        <div className='min-h-[50vh]'>
            <main className='mx-auto max-w-3xl'>
                <Outlet />
            </main>
        </div>
        <CartOverview />
    </div>
  )
}
