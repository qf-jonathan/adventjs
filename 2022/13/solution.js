/**
 * @param {number} lastBackup
 * @param {number[][]} changes
 * @return {number[]}
 */
function getFilesToBackup(lastBackup, changes) {
    return [
        ...new Set(
            changes
                .filter(([_, timestamp]) => timestamp > lastBackup)
                .map(([id, _]) => id)
        )
    ].sort((a, b) => a - b);
}

export { getFilesToBackup };
