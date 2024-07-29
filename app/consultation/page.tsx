"use client";
import React from 'react';
import DocConsultationCard from '@/components/DocConsultationCard';

const Page = () => {
  const doctors = [
    { id: 1, image: 'https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg', name: 'Dr. John Doe', specialist: 'Cardiologist', qualification: 'MD, PhD', experience: '10 years', contact: '+1234567890', address: '123 Heart St, Cardio City' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWDmw7UW2jSzHH6WQ_mAkuPlzwm1qpdg-VA&s', name: 'Dr. Jane Smith', specialist: 'Neurologist', qualification: 'MD', experience: '8 years', contact: '+1234567891', address: '456 Brain Rd, Neuro Town' },
    { id: 3, image: 'https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress.jpg', name: 'Dr. Alex Johnson', specialist: 'Dermatologist', qualification: 'MD, MSc', experience: '7 years', contact: '+1234567892', address: '789 Skin Ave, Derma Ville' },
    { id: 4, image: 'https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/64a14d377e81e459c4b9a2fb_Dr%20Sandya%20M%20R.jpeg', name: 'Dr. Emily Davis', specialist: 'Pediatrician', qualification: 'MD', experience: '5 years', contact: '+1234567893', address: '123 Kids St, Pedia City' },
    { id: 5, image: 'https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg', name: 'Dr. Michael Brown', specialist: 'Orthopedic', qualification: 'MD', experience: '9 years', contact: '+1234567894', address: '456 Bones Rd, Ortho Town' },
    { id: 6, image: 'https://www.manipalhospitals.com/uploads/doctors_photo/dr-shashikala-ksheerasagar-consultant-obstetrics-and-gynaecology.png', name: 'Dr. Sarah Wilson', specialist: 'Gynecologist', qualification: 'MD', experience: '12 years', contact: '+1234567895', address: '789 Women Ave, Gyno Ville' },
    { id: 7, image: 'https://via.placeholder.com/350x300', name: 'Dr. David Lee', specialist: 'Surgeon', qualification: 'MD', experience: '15 years', contact: '+1234567896', address: '123 Surgery St, Surgeon City' },
    { id: 8, image: 'https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6512947da0810d252e5c23ac_Dr.%20Pragya%20Goel.jpg', name: 'Dr. Laura Martinez', specialist: 'Oncologist', qualification: 'MD, PhD', experience: '10 years', contact: '+1234567897', address: '456 Cancer Rd, Onco Town' },
    { id: 9, image: 'https://via.placeholder.com/350x300', name: 'Dr. Robert Taylor', specialist: 'Dentist', qualification: 'DDS', experience: '6 years', contact: '+1234567898', address: '789 Teeth Ave, Dental Ville' }
  ];

  return (
    <div className="bg-purple-200 bg-cover bg-center min-h-[100vh]">
      <div className=" mt-[100px] circlePosition w-[590px] h-[400px] bg-[#eb26fd] rounded-[100%] absolute z-1 top-[50%] left-[50%] -translate-x-1/2  blur-[150px]"></div>
      <div className="center m-[auto] w-[70%]">
        <div className="centerText">
          <h1 className="text-[50px] mt-[90px] text-center font-bold text-[#fa48ee] bg-clip-text text-transparent">
            Where would you like to go for your consultation?
          </h1>
          <p className="mt-[90px] info text-center text-[30px] text-[#706f6f]">
            Choose from our range of specialists and get the care you need.
          </p>
          <div className="bluertext mt-[50px] bg-[white]/40 relative z-10 p-[20px] backdrop-blur-[50px] w-[1250px] h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {doctors && doctors.map((doctor) => (
                <div key={doctor.id}>
                  <DocConsultationCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
