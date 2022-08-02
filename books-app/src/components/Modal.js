
export default function Modal({ showModal, setShowModal, item }) {
    console.log(item)
    return (

        <>
            {showModal &&
                <>
                    <div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="relative p-6 flex-auto">
                                    <h3 className='py-3 text-lg'>{item.volumeInfo.title}</h3>
                                    <img className='py-3' src={item.volumeInfo.imageLinks?.thumbnail} alt="not found" />
                                    <p className='text-md py-2'>{item.volumeInfo.description}</p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <a
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        href={item.volumeInfo.previewLink}
                                        target="_blank"
                                    >
                                        Read
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            }
        </>
    );
}