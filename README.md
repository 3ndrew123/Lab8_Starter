# Lab 8 - Starter

Andrew Nguyen

1. Within a Github action that runs whenever code is pushed
This is the best option to fit your automated tests in the Recipe project development pipeline because using this option will restrict more human error from occuring when we want to run our tests. This will be the option that makes it easiest
for developers.
2. No, we can just use a unit test to see if the output is correct. There aren't multiple steps for us to check, so we only need a unit test.
3. No because using the message features would require several steps to send a message, meaning that an end to end test would be more viable to test if all of the necessary steps to send a message are working properly. 
4. Yes, because all you would only need to do is test whether the behavior for the function is correct before you can integrate it into the messaging features. Checking message length would not require multiple steps like it would for messaging.
