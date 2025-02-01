import { getBoard } from '@/actions/actions'
import React from 'react'
import EditAlbumForm from '@/components/EditAlbumFrom'

interface Props {
   params: Promise<{
      id: string
   }>
}

export default async function EditAlbum({ params }: Props) {
   const {id} = await params
   const { board } = await getBoard(id)
   return (
      <div>
         <EditAlbumForm
            id={board._id}
            title={board.title}
            description={board.description}
            bookmark = {board.bookmark}
         />
      </div>
   )
}