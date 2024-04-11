import React from 'react';
import Head from 'next/head';

const ExamRegistration = () => {
    return (
        <div>
        <Head>
            <title style={{type:'strong'}}>Exam Registration</title>
        </Head>
        <h1 style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '80px', backgroundColor: '#269A7E' }}>EXAM REGISTRATION</h1>
        <div className="mb-4" style={{ width: '370px', height: '400px', margin: 'auto', backgroundColor: 'rgb(211, 204, 204)' }}>
            <h4 style={{ textAlign: 'center' }}>Uploads</h4>
            <form style={{ width: '300px', marginLeft: '20px' }}>
                <label style={{ display: 'flex', marginTop: '20px', fontSize: '18px' }} htmlFor="photo">Passport Size Photo</label>
                <input style={{ width: '100%', padding: '7px', border: 'none', borderRadius: '6px', outline: 'none' }} className="chosen file" id="photo" type="file" accept="image/*" />

                <label style={{ display: 'flex', marginTop: '20px', fontSize: '18px' }} className="block text-gray" htmlFor="signature">Signature</label>
                <input style={{ width: '100%', padding: '7px', border: 'none', borderRadius: '6px', outline: 'none' }} className="shadow appearance" id="signature" type="file" accept="image/*" />

                <label style={{ display: 'flex', marginTop: '20px', fontSize: '18px' }} className="block-text" htmlFor="id-proof">ID Proof</label>
                <input style={{ width: '100%', padding: '7px', border: 'none', borderRadius: '6px', outline: 'none' }} className="shadow-md" id="id-proof" type="file" accept="image/*" />
                
                <div style={{ marginTop: '20px', textAlign: 'center' }} className="btn">
                    <button style={{ backgroundColor: '#269A7E', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', width: '50%' }} className="submit-button">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default ExamRegistration;

