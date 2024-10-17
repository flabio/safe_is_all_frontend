import { useMutation } from "@tanstack/react-query"



const useMutationHook=(properties:any) => {
    return useMutation(properties)
}

export default useMutationHook;