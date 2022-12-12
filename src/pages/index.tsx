import { Login } from '@mui/icons-material';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import LearnBody from '../components/Learn';

const Index = () => {
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
        <LearnBody />
      </Main>
      <Login />
    </div>
  );
};

export default Index;
