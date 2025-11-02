import datetime

todo_list = []

while True:
    if not todo_list:
        print("Your ToDo list is empty")
    else:
        for index, (task, timestamp) in enumerate(todo_list, start=1):
            print(f"{index}. {task} (Added: {timestamp})")

    print("Options:")
    print("1. Add Task")
    print("2. Remove Task")
    print("3. Quit")

    choice = input("Enter your choice (1, 2, or 3): ")

    if choice == "1":
        print("Adding task")
        new_task = input("Enter the task: ")
        timestamp = datetime.datetime.now().strftime("%m-%d-%Y %H:%M:%S")
        todo_list.append((new_task, timestamp))
        print(f"Task '{new_task}' added to the ToDo list on {timestamp}")

    elif choice == "2":
        print("Removing task")
        if len(todo_list) > 0:
            removed_task, removed_time = todo_list.pop()
            deletion_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            print(f"Task '{removed_task}' (Added: {removed_time}) removed on {deletion_time}")
        else:
            print("Your ToDo list is empty")

    elif choice == "3":
        print("Quitting")
        break

    else:
        print("Invalid choice. Please select 1, 2, or 3.")
