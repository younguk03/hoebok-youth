import { getBoard } from '@/actions/actions'
import React from 'react'
import EditBoardForm from '@/components/EditBoardForm'

interface Props {
   params: Promise<{
      id: string
   }>
}

export default async function EditBoard({ params }: Props) {
   const {id} = await params
   const { board } = await getBoard(id)
   return (
      <div>
         <EditBoardForm
            id={board._id}
            title={board.title}
            description={board.description}
            categorie={board.categorie}
            bookmark={board.bookmark}
         />
      </div>
   )
}