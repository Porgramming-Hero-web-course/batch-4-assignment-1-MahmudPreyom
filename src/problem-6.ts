{
    // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

    function updateProfile(profile: Profile, updates: { name?: string; age?: number; email?: string }): Profile {
        const profileObject = { ...profile, ...updates };
        return profileObject;
    }


    const manualUpdate = updateProfile(myProfile, { age: 60 })
    console.log(manualUpdate);

}