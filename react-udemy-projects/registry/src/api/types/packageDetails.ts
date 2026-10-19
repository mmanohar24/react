export interface PackageDetails
{
    name: string;
    description: string;
    readme: string;
    maintainers: {
        email: string;
        name: string;
    }[];
    author: {
        name: string;
        email: string;
    }
    license: string;
}