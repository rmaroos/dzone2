import { RouterProvider, useRouter } from '@/lib/router';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { CarsPage } from '@/pages/CarsPage';
import { ContactPage } from '@/pages/ContactPage';

function Routes() {
  const { path } = useRouter();

  if (path.startsWith('/cars')) return <CarsPage />;
  if (path.startsWith('/contact')) return <ContactPage />;
  return <HomePage />;
}

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <Routes />
      </Layout>
    </RouterProvider>
  );
}
