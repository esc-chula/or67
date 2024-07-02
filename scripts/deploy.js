import { readFile, writeFile } from 'fs/promises';

const generateDeploymentId = () => {
    const charset =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let deploymentId = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        deploymentId += charset[randomIndex];
    }
    return deploymentId;
};

const updateReadme = async () => {
    try {
        const readmePath = './README.md';
        const newDeploymentId = generateDeploymentId();

        let readmeContent = await readFile(readmePath, 'utf8');
        const updatedContent = readmeContent.replace(
            /Deployment ID: `\w{16}`/,
            `Deployment ID: \`${newDeploymentId}\``
        );

        await writeFile(readmePath, updatedContent, 'utf8');
        console.log(
            'README.md has been updated with new Deployment ID:',
            newDeploymentId
        );
    } catch (error) {
        console.error('Error updating README.md:', error);
    }
};

updateReadme();
