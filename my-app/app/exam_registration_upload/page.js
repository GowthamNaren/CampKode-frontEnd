import React from 'react';


const ExamRegistration = () => {
    return (
        <div className='bg-zinc-300 h-screen'>
    
            <div className="flex justify-center font-semibold text-xl bg-emerald-600 px-4 py-4">
                <h1>
                EXAM REGISTRATION
                </h1>
            </div>

 
        <div className=" mx-auto mb-4 mt-8 bg-zinc-200 px-4 py-4 h-10 w-10" style={{ width: '370px', height: '400px'}}>
            <h4 style={{ textAlign: 'center' }}>Uploads</h4>
            <form style={{ width: '300px', marginLeft: '20px' }}>
                <label style={{ display: 'flex', marginTop: '20px', fontSize: '18px' }} htmlFor="photo">Passport Size Photo</label>
                <input style={{ width: '100%', padding: '7px', border: 'none', borderRadius: '6px', outline: 'none' }} className="shadow-md" id="photo" type="file" accept="image/*" />

                <label style={{ display: 'flex', marginTop: '20px', fontSize: '18px' }} className="block text-gray" htmlFor="signature">Signature</label>
                <input style={{ width: '100%', padding: '7px', border: 'none', borderRadius: '6px', outline: 'none' }} className="shadow appearance" id="signature" type="file" accept="image/*" />

                <label style={{ display: 'flex', marginTop: '20px', fontSize: '18px' }} className="block-text" htmlFor="id-proof">ID Proof</label>
                <input style={{ width: '100%', padding: '7px', border: 'none', borderRadius: '6px', outline: 'none' }} className="shadow-md" id="id-proof" type="file" accept="image/*" />
                
                <div style={{ marginTop: '20px', textAlign: 'center' }} className="btn">
                    <button className='bg-emerald-600 text-white px-4 py-2 round mt-4 mb-4 w-50%'  >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default ExamRegistration;

