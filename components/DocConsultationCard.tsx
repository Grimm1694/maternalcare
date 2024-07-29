"use client";
import { useState } from 'react';

export default function DocConsultationCard({ doctor }: { doctor: any }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 h-[350px] w-[300px] lg:w-[400px] cursor-pointer gap-3" onClick={openModal}>
                <div className="h-full w-full">
                    <img
                        src={doctor.image}
                        alt="Doctor"
                        className="w-full h-[250px] object-cover rounded-t-lg"
                    />
                    <div className="text-center py-2">
                        <h2 className="font-semibold text-lg lg:text-xl text-gray-800">{doctor.name}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
