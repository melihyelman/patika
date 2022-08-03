
export const Steps = ({ step, data, setData }) => {
    if (step === 0) {
        return (
            <>
                <h1 className='w-full text-center text-2xl font-bold mb-4 border-b border-sky-400 pb-3'>Welcome to the BMI calculator</h1>

                <div className='w-1/2'>
                    <label htmlFor="first_namename" className="block mb-2 text-sm font-medium text-gray-500 ">Name</label>
                    <input type="text" id="name" name="name" value={data.name} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} className="bg-gray-50 border text-gray-900 border-gray-300  text-sm rounded-lg focus:outline-none w-full p-2.5" placeholder="Place enter your name..." />
                </div>

                <div className='flex gap-4 py-2'>
                    <div className="flex items-center">
                        <input id="default-radio-1" type="radio" name="gender" checked={data.gender === "male"} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} value="male" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-500 ">Male</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-radio-2" type="radio" name="gender" checked={data.gender === "female"} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} value="female" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-500 ">Female</label>
                    </div>
                </div>


            </ >
        )
    } else if (step === 1) {
        return (
            <>
                <img className='w-64 h-64 object-cover' src={`/images/home-${data.gender}.png`} alt='notfound' />

                <div className='w-1/2'>
                    <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-500 ">Height</label>
                    <input type="text" id="height" name="height" value={data.height} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} className="bg-gray-50 border text-gray-900 border-gray-300  text-sm rounded-lg focus:outline-none w-full p-2.5" placeholder="Place enter your height..." />
                </div>

                <div className='w-1/2'>
                    <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-500 ">Weight</label>
                    <input type="text" id="weight" name="weight" value={data.weight} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} className="bg-gray-50 border text-gray-900 border-gray-300  text-sm rounded-lg focus:outline-none w-full p-2.5" placeholder="Place enter your weight..." />
                </div>

            </>
        )
    }

}
