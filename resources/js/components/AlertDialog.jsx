import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Link, router } from "@inertiajs/react"
  import { Trash2Icon } from "lucide-react"

  export function AlertDialogComponent({question}) {
    const handleDelete = (id) => {
        router.delete(route('question.destroy', id));
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Chat</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <div className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2Icon />
            </div>
            <AlertDialogTitle>Delete chat?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this chat conversation. View{" "}
              <a href="#">Settings</a> delete any memories saved during this chat.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => {handleDelete(question.id)}} variant="destructive">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
