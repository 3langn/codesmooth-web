import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <div>
      <Main
        meta={
          <Meta
            title="Next.js Boilerplate Presentation"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
      >
        <div className="flex justify-center">
          <div className="my-10 w-[50%]">
            <span>Continues Learning</span>
            <div className="h-80  rounded-lg border border-gray-300 shadow-md">
              <div className="flex flex-row">
                <Link
                  href="/course"
                  className="border-none px-16 py-4 text-black hover:text-gray-900"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Index;
