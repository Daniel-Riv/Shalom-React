import { CardP } from './CardP';
import { FormC } from './FormC';
import './form.css';

export const ContentP = () => {
  return (

     <div className="contactus p-5">
      <div className="row no-gutters">
        <div className="container">
         <div className="row">
                <CardP />
                <FormC />
         </div>
        </div>
      </div>
     </div>
  );
};
