import React from 'react'
import { useGame } from '../context/gameContext'

export const History = () => {
    const { game } = useGame()
    return game.length > 0 ? (
        <div className="w-full max-h-96 overflow-auto border border-gray-300 relative shadow-md sm:rounded-lg">
            <table className="w-full  text-base text-left text-gray-500 ">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Round
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Result
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {game.map((e, i) => (
                        <tr className="bg-white border-b hover:bg-gray-300 font-semibold text-sm" key={i}>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                {e.round}
                            </th>
                            <td className="py-4 px-6">
                                {e.result}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (<div className='text-xl'>
        There are no history.
    </div>)


}
