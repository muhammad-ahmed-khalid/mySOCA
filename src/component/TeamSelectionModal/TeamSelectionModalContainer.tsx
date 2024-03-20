import { getAgeGroup } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useTeamSelectionModalContainer() {

    const { data: getAgeGroupList } = useQuery(
        [STORAGE_KEYS.GET_AGE_GROUP],
        getAgeGroup,
        { cacheTime: 0, staleTime: 0 },
    );

    return {
        getAgeGroupList
    }
}