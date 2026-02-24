"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

export const SaveButton = ({isEditing, isPending, onCancel, onEdit}) => {
  return (
     <div className="flex gap-2 disabled:opacity-45">
                {isEditing ? (
                  <Button
                    disabled={isPending}
                    variant="outline"
                    type="button"
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                ) : (
                  <Button
                    
                    onClick={onEdit}
                    type="button"
                  >
                    Edit
                  </Button>
                )}
    
                {isEditing && (
                  <Button  disabled={isPending} type="submit">
                    {isPending ? "Saving..." : "Save"}
                  </Button>
                )}
              </div>
  )
}
